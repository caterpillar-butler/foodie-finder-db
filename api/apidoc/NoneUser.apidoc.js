/**
 * @api {get} /api/noneUser/boards 전체 게시글 조회
 * @apiName GetAllBoards
 * @apiGroup NoneUser
 * @apiVersion 1.0.0
 * @apiDescription 모든 게시글 조회
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
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
 *     ]
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to fetch boards"
 *     }
 */

/**
 * @api {get} /api/noneUser/board/title 게시글 제목 검색
 * @apiName SearchBoardByTitle
 * @apiGroup NoneUser
 * @apiVersion 1.0.0
 * @apiDescription 게시글 제목 검색
 * @apiBody (Request Body) {String} title 검색할 제목
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiParamExample {json} Request-Example:
 *     {
 *       "title": "Search Title"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *           "id": "board1",
 *           "title": "Search Title",
 *           "content": "Board Content"
 *         },
 *         {
 *           "id": "board2",
 *           "title": "Search Title",
 *           "content": "Board Content"
 *         },
 *         ...
 *     ]
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to search boards by title"
 *     }
 */

/**
 * @api {get} /api/noneUser/board/tag 게시글 해시태그 검색
 * @apiName SearchBoardByTag
 * @apiGroup NoneUser
 * @apiVersion 1.0.0
 * @apiDescription 해시태그별 게시글 검색
 * @apiBody (Request Body) {String} tag 검색할 해시태그
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiParamExample {json} Request-Example:
 *     {
 *       "tag": "Search Tag"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *           "id": "board1",
 *           "title": "Board Title",
 *           "content": "Board Content",
 *           "tags": ["Search Tag"]
 *         },
 *         {
 *           "id": "board2",
 *           "title": "Search Tag",
 *           "content": "Board Content",
 *           "tags": ["Search Tag"]
 *         },
 *         ...
 *     ]
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to search boards by tag"
 *     }
 */

/**
 * @api {get} /api/noneUser/board/user 유저별 게시글 검색
 * @apiName SearchBoardByUser
 * @apiGroup NoneUser
 * @apiVersion 1.0.0
 * @apiDescription 유저별 게시글 검색
 * @apiBody (Request Body) {String} userId 검색할 유저 ID
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiParamExample {json} Request-Example:
 *     {
 *       "userId": "user1"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *           "id": "board1",
 *           "title": "Board Title",
 *           "content": "Board Content",
 *           "userId": "user1"
 *         },
 *         {
 *           "id": "board2",
 *           "title": "Search Tag",
 *           "content": "Board Content",
 *           "userId": "user1"
 *         },
 *         ...
 *     ]
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to search boards by user"
 *     }
 */

/**
 * @api {get} /api/noneUser/board/content 게시글 내용 검색
 * @apiName SearchBoardByContent
 * @apiGroup NoneUser
 * @apiVersion 1.0.0
 * @apiDescription 게시글 내용 검색
 * @apiBody (Request Body) {String} content 검색할 내용
 * @apiSuccess {Object[]} boardDtos 게시글 정보 목록
 * @apiParamExample {json} Request-Example:
 *     {
 *       "content": "Search Content"
 *     }
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     [
 *         {
 *           "id": "board1",
 *           "title": "Board Title",
 *           "content": "Search Content"
 *         },
 *         {
 *           "id": "board2",
 *           "title": "Search Content",
 *           "content": "Board Content"
 *         },
 *         ...
 *     ]
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 500 Internal Server Error
 *     {
 *       "error": "Failed to search boards by content"
 *     }
 */
