class Status {

    constructor() {};

    ok(res, message) {

        res.status(200).json({
            message: message || 'OK',
            status: 200
        });

    }

    created(res, message) {

        res.status(201).json({
            message: message || 'Created',
            status: 201
        });

    }

    badRequest(res, message) {

        res.status(400).json({
            message: message || 'Bad request',
            status: 400
        });

    }

    unauthorized(res, message) {

        res.status(401).json({
            message: message || 'User authentication required',
            status: 401
        });

    }

    forbidden(res, message) {

        res.status(403).json({
            message: message || 'Forbidden',
            status: 403
        });

    }

    notFound(res, message) {

        res.status(404).json({
            message: message || 'Not found',
            status: 404
        });

    }

}

export default Status;