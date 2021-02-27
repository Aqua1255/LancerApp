package lancer.blue7


import org.springframework.data.repository.CrudRepository
//import org.springframework.security.access.prepost.PreAuthorize

//@PreAuthorize("hasRole('ROLE_USER')")
interface Blue7Repository : CrudRepository<Blue7?, Long?> {
//    @PreAuthorize("hasRole('ROLE_USER')")
//    override fun <S : Blue7?> save(entity: S): S
//
//    @PreAuthorize("hasRole('ROLE_USER')")
//    override fun delete(entity: Blue7)

}