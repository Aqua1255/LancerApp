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

//Send data to db

export const sendBlue6s = async(blue6SentFormData: Blue6Data) => {
    try {
        console.log("did I make it")
        await axios.post("/api/blue6s", blue6SentFormData)

    } catch (e) {
        console.log(e.message)
        throw new Error(e.message)
    }
}
export const deleteBlue6s = async(blue6Id:number) => {
    try{
        console.log("was blue6 deleted")
        await axios.delete(`/api/blue6s/${blue6Id}`)


    } catch(e){
        console.log(e.message)
        throw new Error(e.message)
    }
}

export const archiveBlue6s = async(blue6SentFormData: Partial<Blue6Data>) => {
    try{
        console.log("was blue6 archived")
        await axios.patch(`/api/blue6s/${blue6SentFormData.id}`, blue6SentFormData)

    }catch(e){
        console.log(e.message)
        throw new Error(e.message)
    }
}

export interface Blue6Data {

    id?: number;
    reportingDateInput : string;
    callSignInput : string;
    spDateInput : string;
    rpInput : string;
    locInput : string;
    etaInput : string;
    siInput : string;
    narInput : string;
    pocInput : string;
    archived : boolean;
    createdBy?: string;
}