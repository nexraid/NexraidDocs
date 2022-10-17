//@ts-check
/// <reference types="node" />

const fs = require('fs')
const path = require('path')
const glob = require('glob')
const yaml = require('js-yaml')

main().catch(error => {
    console.error(error)
    process.exit(1)
})

async function main() {
    console.log('[.] finding all sidebars ...')
    const sidebarDir = path.join(__dirname, '../sidebars')
    const sidebars = fs.readdirSync(sidebarDir)
        .filter(it => it.endsWith('.yaml'))
        .map(it => it.replace(/\.yaml$/, ''))
    const sidebarSet = new Set(sidebars)
    console.log(`[~] found ${sidebarSet.size} sidebars`)

    console.log('[.] finding all markdown files ...')
    const documentDir = path.join(__dirname, '../documents')

    /** @type {string[]} */
    const documentFiles = await new Promise((resolve, reject) => {
        glob('**/*.md', { cwd: documentDir }, (error, files) => {
            if (error) return reject(error)
            return resolve(files)
        })
    })
    console.log(`[~] found ${documentFiles.length} document files`)

    let errorCount = 0
    /** @type {Map<string,string>} "${uuid}--${version}" => "${file}" */
    const uuidMap = new Map()
    documentFiles.forEach((file) => {
        const filePath = path.join(documentDir, file)
        const throwError = (message) => {
            console.error(`[-] invalid document "${file}": ${message}`)
            errorCount++
            return
        }
        // console.log(`[.] checking "${file}" ...`)

        let markdown
        try {
            markdown = fs.readFileSync(filePath, 'utf8')
        } catch (error) {
            return throwError(error.message)
        }

        const frontmatterYaml = markdown.match(/^---([\s\S]+?)---/)
        // ignore snippets
        if (!frontmatterYaml) return
        if (!frontmatterYaml[1])
            return throwError(`it doesn't have meta data`)

        let metadata
        try {
            metadata = yaml.safeLoad(frontmatterYaml[1])
        } catch (error) {
            return throwError(error.message)
        }

        if (metadata.sidebar)
            if (!sidebarSet.has(metadata.sidebar))
                return throwError(`sidebar '${metadata.sidebar}' is not existed!`)

        if (metadata.draft === true)
            return;

        if (!metadata.uuid || typeof metadata.uuid !== 'string')
            return throwError(`it doesn't have uuid`)

        const version = metadata.version_name || ''
        if (typeof version !== 'string')
            return throwError(`its version_name is not a valid string`)

        const uuidKey = metadata.uuid + '--' + version
        const existed = uuidMap.get(uuidKey)
        if (existed)
            return throwError(`its uuid is duplicated with the document "${existed}"`)
        uuidMap.set(uuidKey, file)

        // console.log(`[~] document "${file}" is valid`)
    })

    if (errorCount > 0)
        process.exit(1)

} // main
