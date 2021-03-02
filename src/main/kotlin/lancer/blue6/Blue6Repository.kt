package lancer.blue6

import org.springframework.data.repository.CrudRepository
import org.springframework.security.access.prepost.PreAuthorize

@PreAuthorize(("hasPermission('lancer.blue6.Blue6', 'blah')"))
interface Blue6Repository : CrudRepository<Blue6, Long>


//@RepositoryRestResource(collectionResourceRel = "blue 6", path = "blue 6")
//interface Blue6Repository : PagingAndSortingRepository<Blue6?, Long?> {
//    fun findByCallSignInput(@Param("callSignInput") name: String?): List<Blue6?>?
//
//}




