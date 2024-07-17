
/**
 * @api {get} /api/user/follower 나를 팔로잉하고 있는 사람들의 목록
 * @apiName GetFollowers
 * @apiGroup Community
 * @apiVersion 1.0.0
 * @apiDescription 나를 팔로잉하고 있는 사람들의 목록 (커뮤니티 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Array} userDtos 사용자 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userDtos": [
 *         {
 *           "email": "user@example.com",
 *           "name": "User Name",
 *           "phone": "010-1234-5678",
 *           "profileImage": "https://example.com/profile.jpg"
 *         },
 *         {
 *           "email": "user2@example.com",
 *           "name": "User Name2",
 *           "phone": "010-1234-5678",
 *           "profileImage": "https://example.com/profile2.jpg"
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
export const getFollowers = () => {
  // ... API call implementation
};

/**
 * @api {get} /api/user/following 내가 팔로잉하고 있는 사람들의 목록
 * @apiName GetFollowing
 * @apiGroup Community
 * @apiVersion 1.0.0
 * @apiDescription 내가 팔로잉하고 있는 사람들의 목록 (커뮤니티 서비스)
 * @apiHeader {String} Authorization Bearer JWT
 * @apiSuccess {Array} userDtos 사용자 정보 목록
 * @apiSuccessExample {json} Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "userDtos": [
 *         {
 *           "email": "user@example.com",
 *           "name": "User Name",
 *           "phone": "010-1234-5678",
 *           "profileImage": "https://example.com/profile.jpg"
 *         },
 *         {
 *           "email": "user2@example.com",
 *           "name": "User Name2",
 *           "phone": "010-1234-5678",
 *           "profileImage": "https://example.com/profile2.jpg"
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
export const getFollowing = () => {
  // ... API call implementation
};
