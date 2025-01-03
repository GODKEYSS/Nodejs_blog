const Course = require('../models/Course');

class SiteController {

    // [GET] /
    index(req, res) {
        Course.find({})
            .then(courses => {
                // Nếu không có lỗi, trả về danh sách khóa học dưới dạng JSON
                res.json(courses);
            })
            .catch(err => {
                // Nếu có lỗi, xử lý lỗi và trả về một trạng thái lỗi hoặc thông báo
                console.error(err);
                res.status(500).json({ error: 'Internal Server Error' });
            });
    }

    // [GET] / search
    search(req, res) {

        res.render('search');
    }
}

module.exports = new SiteController;
const newsController = require('./SiteController');

