
/**
 * @api {post} /api/user/board 게시글 생성
 * @apiName CreateBoard
 * @apiGroup Board
 * @apiVersion 1.0.0
 * @apiDescription 게시글 생성 (게시글 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiHeader {String} Content-Type application/json
 * @apiBody (Request Body) {Object} boardDto 게시글 정보
 * @apiParamExample {json} Request-Example:
 *     {
 *       "title": "Post Title",
 *       "content": "Post Content",
 *       "likes": 0,
 *       "image": "https://example.com/image.jpg",
 *       "hashTags": ["tag1", "tag2"]
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully created post"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const createPost = (boardDto) => {
  // ... API call implementation
};

/**
 * @api {put} /api/user/board 게시글 수정
 * @apiName UpdateBoard
 * @apiGroup Board
* @apiVersion 1.0.0
 * @apiDescription 게시글 수정 (게시글 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiHeader {String} Content-Type application/json
 * @apiBody (Request Body) {Object} boardDto 게시글 정보
 * @apiParamExample {json} Request-Example:
 *     {
 *       "title": "Post Title",
 *       "content": "Post Content",
 *       "likes": 0,
 *       "image": "https://example.com/image.jpg",
 *       "hashTags": ["tag1", "tag2"]
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully updated post"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const updatePost = (boardDto) => {
  // ... API call implementation
};

/**
 * @api {get} /api/noneUser/board 게시글 목록 조회
 * @apiName GetBoards
 * @apiGroup Board
 * @apiVersion 1.0.0
 * @apiDescription 게시글 목록 조회 (게시글 서비스)
 * @apiSuccess {Array} boardDtos 게시글 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "boardDtos": [
 *         {
 *           "id": "1",
 *           "title": "Post Title",
 *           "content": "Post Content",
 *           "likes": 0,
 *           "image": "https://example.com/image.jpg"
 *         },
 *         {
 *           "id": "2",
 *           "title": "Post Title2",
 *           "content": "Post Content2",
 *           "likes": 0,
 *           "image": "https://example.com/image2.jpg"
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
export const getPosts = () => {
  // ... API call implementation
};

/**
 * @api {get} /api/noneUser/board/:id 상세 게시글 조회
 * @apiName GetBoard
 * @apiGroup Board
 * @apiVersion 1.0.0
 * @apiDescription 상세 게시글 조회 (게시글 서비스)
 * @apiParam {String} id 게시글 ID
 * @apiSuccess {Object} boardDto 게시글 정보
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "boardDto": {
 *         "id": "1",
 *         "title": "Post Title",
 *         "content": "Post Content",
 *         "likes": 0,
 *         "image": "https://example.com/image.jpg"
 *       }
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const getPost = (id) => {
  // ... API call implementation
};
