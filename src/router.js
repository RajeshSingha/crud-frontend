import Vue from 'vue'
import Router from 'vue-router'
import AddStudent from './views/AddStudent.vue'
import EditStudent from './views/EditStudent.vue'
import ShowStudents from './views/ShowStudents.vue'

Vue.use(Router)

const router =  new Router({
  routes: [
    {
      path: '/',
      name: 'ShowStudents',
      component: ShowStudents
    },
    {
      path: '/editStudent/:id',
      name: 'editStudent',
      component: EditStudent
    },
    {
      path: '/addStudent',
      name: 'AddStudent',
      component: AddStudent
    },
  ]
})
export default router
