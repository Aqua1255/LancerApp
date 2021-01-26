package net.mybluemix.lancerapp.blue6

import org.springframework.data.repository.CrudRepository


interface Blue6Repository : CrudRepository<Blue6?, Long?>


//@RepositoryRestResource(collectionResourceRel = "blue 6", path = "blue 6")
//interface Blue6Repository : PagingAndSortingRepository<Blue6?, Long?> {
//    fun findByCallSignInput(@Param("callSignInput") name: String?): List<Blue6?>?
//
//}




