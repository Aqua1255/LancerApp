package lancer.blue6

import lancer.blue7.Blue7
import org.springframework.data.annotation.CreatedBy
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import java.io.Serializable
import javax.persistence.*

@Entity
//@EntityListeners(AuditingEntityListener::class)
data class Blue6(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        val Id: Long=0,
        val reportingDateInput: String = "",
        val callSignInput: String = "",
        val spDateInput: String = "",
        val rpInput: String = "",
        val locInput: String = "",
        val etaInput: String = "",
        val siInput: String = "",
        val narInput: String = "",
        val pocInput: String = ""

): Serializable {
//        @ManyToOne
//        @JoinColumn(name = "created_by_profile_id", updatable = false)
//        @CreatedBy
//        lateinit var createdBy: Blue6
}



//@Entity
//@EntityListeners(AuditingEntityListener::class)
//data class Blue6(
//        @GeneratedValue(strategy = GenerationType.AUTO)
//        @Id
//        val reportingDateInput: String = "",
//        val callSignInput: String = "",
//        val spDateInput: String = "",
//        val rpInput: String = "",
//        val locInput: String = "",
//        val etaInput: String = "",
//        val siInput: String = "",
//        val narInput: String = "",
//        val pocInput: String = ""
//
//) : Serializable {}




