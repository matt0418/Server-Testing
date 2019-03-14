const db = require('../data/dbConfig')
const Wizards = require('./wizardHelper')

describe('Wizard Model', () => {
    describe('add()', () => {
        afterEach(async () => {
            await db('wizards').truncate()
        })
        it('should insert the provided wizard', async () => {
            const wizard = await Wizards.add({ name: "Gandalf" })
            expect(wizard.name).toEqual("Gandalf")
        })
    })
    describe('remove', () => {
        afterEach(async () => {
            await db('wizards').truncate()
        })
        it('should insert the provided wizard', async () => {
            const wizard = await Wizards.add({ name: "Gandalf" })
            expect(wizard.name).toEqual("Gandalf")
        })
        it('should remove a wizard', async () => {
            const deleted = await Wizards.remove(1)
            expect(deleted).toBeDefined()
        })
        it('should remove two wizards', async () => {
            const wizard = await Wizards.add({ name: "Gandalf" })
            expect(wizard.name).toEqual("Gandalf")
            const wizard2 = await Wizards.add({ name: "Sauruman" })
            expect(wizard2.name).toEqual("Sauruman")
            const deleted = await Wizards.remove(1)
            expect(deleted).toBeDefined()
            const deleted2 = await Wizards.remove(2)
            expect(deleted2).toBeDefined()
        })
    })
    
})