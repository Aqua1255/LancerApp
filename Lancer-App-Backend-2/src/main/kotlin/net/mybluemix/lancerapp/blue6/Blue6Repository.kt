package net.mybluemix.lancerapp.blue6
import org.springframework.data.repository.PagingAndSortingRepository
import org.springframework.data.repository.query.Param
import org.springframework.data.rest.core.annotation.RepositoryRestResource


@RepositoryRestResource(collectionResourceRel = "blue 6", path = "blue 6")
interface Blue6Repository : PagingAndSortingRepository<Blue6?, Long?> {
    fun findByCallSignInput(@Param("callSignInput") name: String?): List<Blue6?>?

}




