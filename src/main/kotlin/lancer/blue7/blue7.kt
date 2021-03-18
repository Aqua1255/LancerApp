package lancer.blue7

import org.springframework.data.annotation.CreatedBy
import org.springframework.data.jpa.domain.support.AuditingEntityListener
import org.springframework.security.core.context.SecurityContextHolder
import java.io.Serializable
import javax.persistence.*

@Entity
@EntityListeners(AuditingEntityListener::class)
//@EntityListeners(AuditingEntityListener::class)
data class Blue7(
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Id
        val Id: Long=0,
        val checkOutReportingDateInput: String = "",
        val checkOutCallSignInput: String = "",
        val checkOutRpDateInput: String = "",
        val checkOutLocInput: String = "",
        val accidentInput: String = "",
        val checkOutEtaInput: String = "",
        val checkOutSiInput: String = "",
        val archived: Boolean = false

) : Serializable {
//        var createdBy: String = SecurityContextHolder.getContext().authentication.name
//        @ManyToOne
        @Column(name = "created_by", updatable = false)
        @CreatedBy
        lateinit var createdBy: String
}