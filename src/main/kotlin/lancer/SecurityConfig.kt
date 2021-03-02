package lancer

import org.springframework.context.annotation.Configuration
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository


@Configuration
class AuthConfig : WebSecurityConfigurerAdapter() {
    override fun configure(http: HttpSecurity) {
        super.configure(http)
            http.oauth2Login()
//            http.csrf().disable()
            http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())

    }
}