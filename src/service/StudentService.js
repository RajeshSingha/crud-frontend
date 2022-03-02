import http from './http-common'

class StudentService {

    addStudent(payload) {
        return http.post("student/addStudent", payload)
    }

    getStudent() {
        return http.get("student/getStudents")
    }
    getStudentByID(id) {
        return http.get(`student/getStudentByID/${id}`)
    }
    deleteStudentByID(id) {
        return http.delete(`student/deleteStudentByID/${id}`)
    }

}

export default new StudentService()
