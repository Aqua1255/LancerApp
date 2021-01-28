import axios from 'axios';
export const getBlue6s = async(): Promise<Blue6Data[]> => {
    try{console.log("did I make it")
        const response = await axios.get("/api/blue6s")
        console.log(response.data._embedded.blue6s)
         return response.data._embedded.blue6s;

    } catch (e) {
        console.log(e.message)
        throw new Error(e.message)
    }
}


export interface Blue6Data {

    reportingDateInput : string;
    callSignInput : string;
    spDateInput : string;
    rpInput : string;
    locInput : string;
    etaInput : string;
    siInput : string;
    narInput : string;
    pocInput : string;
}