import { Request, Response } from 'express';


function time_service_view(req:Request, res:Response) {
    let date: Date = new Date();

    if (req.params.date) {
        date = new Date(tryParseInt(req.params.date))
    }

    if (date.toString() === 'Invalid Date') {
        res.json({ error : 'Invalid Date' });
    }

    res.json({unix: date.getTime(), utc: date.toUTCString()});
}

/** Try to convert the string to a number in its entirety. If it fails, the original string is returned. */
function tryParseInt(source:string): number | string {
    let res = parseInt(source)
    return res.toString() === source ? res : source;
}

export default time_service_view;
