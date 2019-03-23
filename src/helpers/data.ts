import {PEOPLES} from "../components/people";


export namespace Data {
    export const getData = () => Promise.resolve(PEOPLES);
}
