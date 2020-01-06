//@ts-check

const fs = require('fs')
const path = require('path')
const yaml = require('js-yaml')

main().catch(error => {
    console.error(error)
    process.exit(1)
})

async function main() {
    console.log('[.] checking sidebar files ...')
    const sidebarDir = path.join(__dirname, '../sidebars')
    const sidebarFiles = fs.readdirSync(sidebarDir)
        .filter(it => it.endsWith('.yaml'))
    console.log(`[~] found ${sidebarFiles.length} sidebar files`)

    for (const file of sidebarFiles) {
        const filePath = path.join(sidebarDir, file)
        const throwError = (message) => {
            console.error(`[-] invalid sidebar file: ${message}`)
            process.exit(1)
        }
        console.log(`[.] checking "${file}" ...`)

        let object
        try {
            object = yaml.safeLoad(fs.readFileSync(filePath, 'utf8'))
        } catch (error) {
            throwError(error.message)
        }

        if (!Array.isArray(object))
            throwError('root element is not an array')

        object.forEach((it, index) => {
            const path1 = `root[${index}].groups`
            if (!it || !Array.isArray(it.groups))
                throwError(`${path1} is not an array`)

            it.groups.forEach((it, index) => {
                const path2 = `${path1}[${index}]`
                if (!it || !it.group || typeof it.group !== 'string')
                    throwError(`${path2}.group is not a valid string`)
                if (!Array.isArray(it.items))
                    throwError(`${path2}.items is not an array`)

                it.items.forEach((it, index) => {
                    const path3 = `${path2}[${index}]`
                    if (!it || !it.title || typeof it.title !== 'string')
                        throwError(`${path3}.title is not a valid string`)
                    if (!it.link || typeof it.link !== 'string')
                        throwError(`${path3}.link is not a valid string`)
                })
            })
        })

        console.log(`[~] "${file}" is valid`)
    }

} // main
