
import { IS_DEV } from "./Config";

export default class Logger {
    static log(err: any) {
        if (!IS_DEV) {
            return;
        }
        console.log(err);
    }

    static error(err: any) {
        if (!IS_DEV) {
            return;
        }
        console.log(err);
    }
}
//
