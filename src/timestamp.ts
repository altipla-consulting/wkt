
import { Timestamp } from './protos/google/protobuf/timestamp.js'


export function serializeTimestamp(timestamp: Date | undefined): Timestamp | undefined {
  if (timestamp) {
    return Timestamp.fromDate(timestamp)
  }
}


export function parseTimestamp(timestamp: Timestamp | undefined): Date | undefined {
  if (timestamp) {
    return Timestamp.toDate(timestamp)
  }
}
