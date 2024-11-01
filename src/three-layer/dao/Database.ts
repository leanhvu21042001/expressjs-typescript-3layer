export default class Database {
  constructor() {
    console.log('Database initialized')
    this.connect()
  }

  connect() {
    console.log('Database connected')
  }

  disconnect() {
    console.log('Database disconnected')
  }

  protected static execute(query: string) {
    console.log('Database execute', query)
  }
}
