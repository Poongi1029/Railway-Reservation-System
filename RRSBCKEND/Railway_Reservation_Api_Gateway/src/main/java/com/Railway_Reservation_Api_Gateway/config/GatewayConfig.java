package com.Railway_Reservation_Api_Gateway.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayConfig {
	@Bean
	public RouteLocator myRoutes(RouteLocatorBuilder routeLocatorBuilder) {
		return routeLocatorBuilder.routes()
				/** Routes For User MicroServices Starts **/

				.route(p -> p.path("/AllTrains").uri("http://localhost:8082"))
				.route(p -> p.path("/AllTickets").uri("http://localhost:8082"))
				.route(p -> p.path("/test").uri("http://localhost:8082"))
				.route(p -> p.path("/dashboard").uri("http://localhost:8082"))
				
				/** Routes For Train booking 8082 MicroServices Ends **/
			
				.route(p -> p.path("/search/searchtrains").uri("http://localhost:8080"))
				.route(p -> p.path("/train/t_id").uri("http://localhost:8080"))
			    .route(p -> p.path("/train/getall").uri("http://localhost:8080"))
				.route(p -> p.path("/test").uri("http://localhost:8080"))
				.route(p -> p.path("/dashboard").uri("http://localhost:8080"))
				.route(p -> p.path("/search/searchtrains/{t_id}").uri("http://localhost:8080"))
				
				
				/** Routes For Train info 8080 MicroServices Ends **/
				
				.route(p -> p.path("/findAllTrains").uri("http://localhost:8081"))

							
				/** Routes For Train search 8081 MicroServices Ends **/
				.build();
	}

}