/**
 * @api {post} /api/user/board/:id/comment 게시글 댓글 작성
 * @apiName CreateComment
 * @apiGroup Comment
 * @apiVersion 1.0.0
 * @apiDescription 게시글 댓글 작성 (댓글 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 게시글 ID
 * @apiBody (Request Body) {Object} commentDto 댓글 정보
 * @apiParamExample {json} Request-Example:
 *     {
 *       "content": "Comment Content"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully created comment"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const createComment = (id, commentDto) => {
  // ... API call implementation
};

/**
 * @api {put} /api/user/board/:id/comment 게시글 댓글 수정
 * @apiName UpdateComment
 * @apiGroup Comment
 * @apiVersion 1.0.0
 * @apiDescription 게시글 댓글 수정 (댓글 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiHeader {String} Content-Type application/json
 * @apiParam {String} id 게시글 ID
 * @apiBody (Request Body) {Object} commentDto 댓글 정보
 * @apiParamExample {json} Request-Example:
 *     {
 *       "content": "Comment Content"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully updated comment"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const updateComment = (id, commentDto) => {
  // ... API call implementation
};
