const saved = require('../database/saved');

module.exports = {
    async get(req, res) {
        try {
            const email = req.user.email
            saved.getAllText(email).then(doc => {
                res.status(200).send({
                    text: doc
                })
            }).catch(err => {
                res.status(403).send({
                    error: "error saving text."
                })
            })
        } catch(err) {
            res.status(403).send({
                error: "error saving text."
            })
        }
        
    },
    async post(req, res) {
        try {
            const text = req.body.text;
            const email = req.body.email;
            saved.saveText({
                text: text,
                email: email
            }).then(doc => {
                res.status(200).send({
                    message: "text saved successfuly"
                })
            }).catch(err => {
                res.status(403).send({
                    error: "error saving text."
                })
            })
        } catch(err) {
            res.status(403).send({
                error: "error saving text."
            })
        }
    },
    async delete(req, res) {
        try {
            const id = req.params.id;
            saved.getById(id).then(doc => {
                if (doc.email == req.user.email) {
                    // Doc belongs to user, so delete the text
                    saved.deleteById(id).then(doc => {
                        res.status(200).send({
                            messages: "deleted text"
                        })
                    }).catch(err => {
                        res.status(403).send({
                            error: "error deleting text"
                        })
                    })
                } else {
                    // Doc belongs to someone else, throw error
                    res.status(403).send({
                        error: "you are not not authorised to access this content"
                    })
                }
            }).catch(err => {
                res.status(403).send({
                    error: "error deleting text"
                })
            })
        } catch(err) {
            console.log(err)
            res.status(403).send({
                error: "error deleting text"
            })
        }
        
    }
}