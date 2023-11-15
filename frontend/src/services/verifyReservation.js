import axios from "axios"

export const VerifyReservation = (reservation) => {
    const ids = reservation.split(':').map((id) => parseInt(id))
    const id_student = ids.shift();

    const body = {
        id: id_student,
        ids_subjects: ids
    }

    return axios.post('http://localhost:4444/qr/', body)
        .then((res) => {
            return res.data
        })
        .catch((err) => {
            throw err
        })
}