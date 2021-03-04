package lancer

import org.springframework.context.annotation.Configuration
import org.springframework.data.domain.AuditorAware
import org.springframework.data.jpa.repository.config.EnableJpaAuditing
import org.springframework.security.core.context.SecurityContextHolder
import org.springframework.stereotype.Component

import java.util.*

@Configuration
@EnableJpaAuditing
class JpaAuditingConfig

@Component
class AuditorAwareImpl(

) : AuditorAware<String> {

    override fun getCurrentAuditor(): Optional<String> {
        return Optional.of(SecurityContextHolder.getContext().authentication.name)
    }
}

//val loginID = getCurrentAuditor(): Optional<String>

//return loginID