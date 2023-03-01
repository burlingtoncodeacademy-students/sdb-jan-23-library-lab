const { MongoClient, ObjectId } = require("mongodb")

class Library {
    constructor(dbUrl, dbName, collName) {
        this.dbUrl = dbUrl
        this.dbName = dbName
        this.collName = collName
        this.dbClient
    }

    async client() {
        console.log(`Connecting to ${this.dbUrl}`)
        this.dbClient = MongoClient.connect(this.dbUrl)
        console.log(`Connected to database`)
        return this.dbClient
    }

    async test() {
        const client = await this.client()
        client.close()
    }

    async collection() {
        const client = await this.client()
        const db = client.db(this.dbName)
        const collection = db.collection(this.collName)
        console.log(collection.namespace)
        return collection
    }

    async allBooks() {
        const collection = await this.collection()
        const result = await collection.find().toArray()
        return result
    }

    async findOneBook(id) {
        const docId = new ObjectId(id)
        const collection = await this.collection()
        return collection.find({ _id: docId }).toArray()
    }

    async findManyBooks(query) {
        const collection = await this.collection()
        return collection.find(query).toArray()
    }

    async addBook(info) {
        const collection = await this.collection()
        await collection.insertOne(info)
        console.log(`Book successfully added`)
    }

    async changeBook(id, newInfo) {
        const docId = new ObjectId(id)
        const infoObj = { $set: newInfo }
        let collection = await this.collection()
        collection.replaceOne({ _id: docId }, newInfo)
        console.log(`Book successfully updated`)
    }

    async removeBook(id) {
        const docId = new ObjectId(id)
        const collection = await this.collection()
        await collection.deleteOne({ _id: docId })
        console.log(`Book successfully deleted`)
    }
}

module.exports = Library