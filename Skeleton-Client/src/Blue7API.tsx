import axios from 'axios';
export const getBlue7s = async(): Promise<Blue7Data[]> => {
    try{console.log("did I make it")
        const response = await axios.get("/api/blue7s")
        console.log(response.data._embedded.blue7s)
        return response.data._embedded.blue7s;

    } catch (e) {
        console.log(e.message)
        throw new Error(e.message)
    }
}

export const sendBlue7s = async(blue7SentFormData: Blue7Data) => {
    try {
        console.log("did I make it")
        await axios.post("/api/blue7s", blue7SentFormData)
    } catch (e) {
        console.log(e.message)
        throw new Error(e.message)
    }
}

export interface Blue7Data {
    checkOutReportingDateInput: string;
    checkOutCallSignInput: string;
    checkOutRpDateInput: string;
    checkOutLocInput: string;
    accidentInput: string;
    checkOutEtaInput: string;
    checkOutSiInput: string;

}