/**
 * @api {get} /api/admin/users 전체 회원 조회
 * @apiName GetAllUsers
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 전체 회원 목록 조회 (회원 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object[]} userDtos 사용자 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userDtos": [
 *         {
 *           "id": "user1",
 *           "email": "user1@example.com",
 *           "name": "User One"
 *         },
 *         {
 *           "id": "user2",
 *           "email": "user2@example.com",
 *           "name": "User Two"
 *         },
 *         ...
 *       ]
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/user 회원 정보 조회
 * @apiName GetUser
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 회원 정보 조회 (회원 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object} userDto 사용자 정보
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userDto": {
 *         "id": "user1",
 *         "email": "user1@example.com",
 *         "name": "User One"
 *       }
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {delete} /api/admin/user 회원 삭제
 * @apiName DeleteUser
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 회원 탈퇴 처리 (회원 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiBody (Request Body) {String} userId 회원 ID
 * @apiParamExample {json} Request-Example:
 *     {
 *       "userId": "user1"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully deleted user"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/boards 전체 게시글 조회
 * @apiName GetAllBoards
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 전체 게시글 목록 조회 (게시글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "boardDtos": [
 *         {
 *           "id": "board1",
 *           "title": "Board Title",
 *           "content": "Board Content"
 *         },
 *         {
 *           "id": "board2",
 *           "title": "Board Title",
 *           "content": "Board Content"
 *         },
 *         ...
 *       ]
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {delete} /api/admin/boards/:id 게시글 삭제
 * @apiName DeleteBoard
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 게시글 삭제 (게시글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiParam {String} id 게시글 ID
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully deleted board"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/inquirys 문의글 조회
 * @apiName GetAllInquiries
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 전체 문의글 목록 조회 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object[]} inquiryDtos 문의글 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "inquiryDtos": [
 *         {
 *           "id": "inquiry1",
 *           "title": "Inquiry Title",
 *           "content": "Inquiry Content"
 *         },
 *         {
 *           "id": "inquiry2",
 *           "title": "Inquiry Title",
 *           "content": "Inquiry Content"
 *         },
 *         ...
 *       ]
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/inquiry 특정 문의글 조회
 * @apiName GetInquiry
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 문의글 조회 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiBody (Request Body) {String} inquiryId 문의글 ID
 * @apiParamExample {json} Request-Example:
 *     {
 *       "inquiryId": "inquiry1"
 *     }
 * @apiSuccess {Object} inquiryDto 문의글 정보
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "inquiryDto": {
 *         "id": "inquiry1",
 *         "title": "Inquiry Title",
 *         "content": "Inquiry Content"
 *       }
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {post} /api/admin/inquiry/reply 특정 문의글 답변
 * @apiName ReplyInquiry
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 문의글 답변 처리 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiBody (Request Body) {String} inquiryId 문의글 ID
 * @apiBody (Request Body) {String} replyContent 답변 내용
 * @apiParamExample {json} Request-Example:
 *     {
 *       "inquiryId": "inquiry1",
 *       "replyContent": "Reply Content"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully replied to inquiry"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/inquiry/replys 답변 목록 조회
 * @apiName GetAllReplies
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 전체 답변 목록 조회 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object[]} replyDtos 답변 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "replyDtos": [
 *         {
 *           "id": "reply1",
 *           "content": "Reply Content"
 *         },
 *         {
 *           "id": "reply2",
 *           "content": "Reply Content"
 *         },
 *         ...
 *       ]
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {get} /api/admin/inquiry/reply 특정 답변글 조회
 * @apiName GetReply
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 답변 조회 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiBody (Request Body) {String} inquiryId 문의글 ID
 * @apiParamExample {json} Request-Example:
 *     {
 *       "inquiryId": "inquiry1"
 *     }
 * @apiSuccess {Object[]} replyDtos 답변 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "replyDtos": [
 *         {
 *           "id": "reply1",
 *           "content": "Reply Content"
 *         },
 *         {
 *           "id": "reply2",
 *           "content": "Reply Content"
 *         },
 *         ...
 *       ]
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */

/**
 * @api {put} /api/admin/inquiry/reply 특정 답변글 수정
 * @apiName UpdateReply
 * @apiGroup Admin
 * @apiVersion 1.0.0
 * @apiDescription 특정 답변 수정 처리 (문의글 관리 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiBody {String} inquiryId 문의글 ID
 * @apiBody {String} replyId 답변 ID
 * @apiBody {String} replyContent 수정된 답변 내용
 * @apiParamExample {json} Request-Example:
 *     {
 *       "inquiryId": "inquiry1",
 *       "replyId": "reply1",
 *       "replyContent": "Updated Reply Content"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully updated reply"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
