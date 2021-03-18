package lancer

import org.springframework.boot.autoconfigure.web.WebProperties
import org.springframework.context.annotation.Configuration
import org.springframework.core.annotation.Order
import org.springframework.core.io.Resource
import org.springframework.security.config.annotation.web.builders.HttpSecurity
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter
import org.springframework.security.web.csrf.CookieCsrfTokenRepository
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry
import org.springframework.web.servlet.config.annotation.ViewControllerRegistry
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter
import org.springframework.web.servlet.resource.PathResourceResolver
import org.springframework.web.servlet.resource.ResourceResolverChain
import java.util.regex.Pattern
import javax.servlet.http.HttpServletRequest

@Configuration
@Order(1)
class AuthConfig : WebSecurityConfigurerAdapter() {
    override fun configure(http: HttpSecurity) {
        super.configure(http)
            http.httpBasic().disable().formLogin().disable()

            http.oauth2Login().defaultSuccessUrl("/landing", true)
            http.csrf().csrfTokenRepository(CookieCsrfTokenRepository.withHttpOnlyFalse())
//            http.csrf().disable()
    }
}

@Configuration
@EnableWebSecurity
class SecurityConfig : WebSecurityConfigurerAdapter() {

    override fun configure(http: HttpSecurity) {
        http.authorizeRequests()
                .antMatchers(
                        "/favicon*",
                        "/android-chrome-*.png",
                        "/manifest.webmanifest",
                        "/static/css/**",
                        "/static/js/**",
                        "/landing",

                        ).permitAll()
                .anyRequest()
                .authenticated()
    }
}

@Configuration
class WebMvcConfig(val resourceProperties: WebProperties.Resources) : WebMvcConfigurer {

    override fun addResourceHandlers(registry: ResourceHandlerRegistry) {
        registry.addResourceHandler("/**")
                .addResourceLocations(*resourceProperties.staticLocations)
                .resourceChain(resourceProperties.chain.isCache)
                .addResolver(FallbackPathResourceResolver())
    }

    private class FallbackPathResourceResolver : PathResourceResolver() {
        override fun resolveResource(
                request: HttpServletRequest?,
                requestPath: String,
                locations: List<Resource>,
                chain: ResourceResolverChain
        ): Resource? {
            return super.resolveResource(request, requestPath, locations, chain)
                    ?: super.resolveResource(request, "/index.html", locations, chain)
        }
    }

}




