# Socket Server API Documentation

The socket server provides HTTP endpoints for retrieving answers and status, as well as real-time socket events for exam interactions.

## Base URL

`http://<server-ip>:<port>`

## HTTP Endpoints

### 1. Get Answers by Exam

Retrieves all answers for a specific exam, optionally filtered by student or exam details.

- **URL**: `/answers/exam/:eId`
- **Method**: `POST`
- **Params**:
  - `eId`: Exam ID (in URL)
- **Body**:
  - `hostname` (string, required): Domain hostname (to resolve storage path).
  - `sId` (string, optional): Student ID filter.
  - `egId` (string, optional): Exam Group ID filter.
  - `edId` (string, optional): Exam Details ID filter.
- **Response**: JSON array of answer objects.

### 2. Get Answers by Student

Retrieves answers for a specific student.

- **URL**: `/answers/student/:sId`
- **Method**: `POST`
- **Params**:
  - `sId`: Student ID (in URL)
- **Body**:
  - `hostname` (string, required): Domain hostname.
  - `eId` (string, optional): Exam ID filter.
  - `egId` (string, optional): Exam Group ID filter.
  - `edId` (string, optional): Exam Details ID filter (single).
  - `edIds` (array, optional): List of Exam Details IDs.
- **Response**: JSON array of answer objects.

### 3. Bulk Submit Answers

Submits multiple answers in a single batch. Answers are queued and processed asynchronously.

- **URL**: `/submissions/bulk`
- **Method**: `POST`
- **Body**:
  - `hostname` (string, required): Domain hostname.
  - `answers` (array, required): Array of answer objects.
    - Each object should match `StudentRequest` structure (e.g., `sId`, `qId`, `ans`, `eId`, `edId`, etc.).
- **Response**:
  ```json
  {
    "message": "Answers queued successfully",
    "count": 5
  }
  ```

### 4. Server Stats

Retrieves current server performance and status.

- **URL**: `/stats`
- **Method**: `GET`
- **Response**:
  ```json
  {
      "database": { ... },
      "queue": { "bufferSize": 0, "totalSaves": 100, "tps": 5 },
      "sockets": { "connected": 10 },
      "cpu": { "percentage": 1.5 },
      "memory": { ... },
      "uptime": 3600
  }
  ```

## Socket Events

### `answer_by_student`

Sent by client to submit a single answer.

- **Payload**: `StudentRequest` object.
- **Server Action**: Queues the answer for persistence.

### `get_remaining_time`

Request from client to calculate remaining time.

- **Payload**: `{ "endtimestamp": 1234567890 }`
- **Response Event**: `remaining_time` with payload `{ "remaining_time": 60 }` (seconds).
