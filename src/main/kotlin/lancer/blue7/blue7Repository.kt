package lancer.blue7


import org.springframework.data.repository.CrudRepository
//import org.springframework.security.access.prepost.PreAuthorize

//@PreAuthorize(("hasPermission('lancer.blue7.Blue7', 'blah')"))
interface Blue7Repository : CrudRepository<Blue7, Long> {

}