//@ts-check

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

    for (const file of documentFiles) {
        const filePath = path.join(documentDir, file)
        const throwError = (message) => {
            console.error(`[-] invalid document: ${message}`)
            process.exit(1)
        }
        console.log(`[.] checking "${file}" ...`)

        let markdown
        try {
            markdown = fs.readFileSync(filePath, 'utf8')
        } catch (error) {
            throwError(error.message)
        }

        const frontmatterYaml = markdown.match(/^---([\s\S]+?)---/)
        if (!frontmatterYaml || !frontmatterYaml[1])
            throwError(`document doesn't have meta data`)

        let metadata
        try {
            metadata = yaml.safeLoad(frontmatterYaml[1])
        } catch (error) {
            throwError(error.message)
        }

        if (metadata.sidebar)
            if (!sidebarSet.has(metadata.sidebar))
                throwError(`sidebar '${metadata.sidebar}' is not existed!`)

        console.log(`[~] document "${file}" is valid`)
    }

} // main
