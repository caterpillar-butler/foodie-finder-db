/**
 * @api {post} /api/user/deleteAccount 회원 탈퇴
 * @apiName DeleteAccount
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription 회원 탈퇴 (회원정보 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully deleted account"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const deleteAccount = () => {
  // ... API call implementation
};

/**
 * @api {get} /api/user/myProfile 내 프로필 조회
 * @apiName GetProfile
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription 내 프로필 조회 (회원정보 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Object} userDto 사용자 정보
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userDto": {
 *         "email": "user@example.com",
 *         "name": "User Name",
 *         "phone": "010-1234-5678",
 *         "profileImage": "https://example.com/profile.jpg",
 *         "introduce": "Hello, I'm a user",
 *         "birth": "1990-01-01",
 *         "gender": "M"
 *       }
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const getProfile = () => {
  // ... API call implementation
};

/**
 * @api {put} /api/user/myProfile 내 프로필 수정
 * @apiName UpdateProfile
 * @apiGroup User
 * @apiVersion 1.0.0
 * @apiDescription 내 프로필 수정 (회원정보 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiHeader {String} Content-Type application/json
 * @apiBody (Request Body) {Object} userDto 사용자 정보
 * @apiParamExample {json} Request-Example:
 *     {
 *       "email": "user@example.com",
 *       "name": "User Name",
 *       "phone": "010-1234-5678",
 *       "profileImage": "https://example.com/profile.jpg",
 *       "introduce": "Hello, I'm a user",
 *       "birth": "1990-01-01",
 *       "gender": "M"
 *     }
 * @apiSuccess {String} message 성공 메시지
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "message": "Successfully updated profile"
 *     }
 * @apiError {String} error 에러 메시지
 * @apiErrorExample {json} Error-Response:
 *     HTTP/1.1 401 Unauthorized
 *     {
 *       "error": "Invalid token"
 *     }
 */
export const updateProfile = (userDto) => {
  // ... API call implementation
};
