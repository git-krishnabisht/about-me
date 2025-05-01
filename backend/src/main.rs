use actix_cors::Cors;
use actix_web::{post, web, App, HttpResponse, HttpServer, Responder};
use lettre::transport::smtp::authentication::Credentials;
use lettre::{Message, SmtpTransport, Transport};
use serde::Deserialize;
use std::env;
use dotenvy::dotenv;

#[derive(Deserialize, Debug)]
struct ContactForm {
    name: String,
    email: String,
    message: String,
}

#[post("/contact")]
async fn contact_handler(form: web::Json<ContactForm>) -> impl Responder {

    println!("{:?}", form.name);
    let gmail_user = env::var("GMAIL_USER").expect("missing GMAIL_USER");
    let gmail_pass = env::var("GMAIL_PASS").expect("missing GMAIL_PASS");

    let email = Message::builder()
        .from(gmail_user.parse().unwrap())
        .to(gmail_user.parse().unwrap()) 
        .subject("New Contact Form Message")
        .body(format!(
            "Name: {}\nEmail: {}\nMessage:\n{}",
            form.name, form.email, form.message
        ))
        .unwrap();

    let creds = Credentials::new(gmail_user, gmail_pass);

    let mailer = SmtpTransport::relay("smtp.gmail.com")
        .unwrap()
        .credentials(creds)
        .build();

    match mailer.send(&email) {
        Ok(_) => HttpResponse::Ok().body("Email sent!"),
        Err(e) => {
            eprintln!("Send error: {:?}", e);
            HttpResponse::InternalServerError().body("Failed to send email")
        }
    }
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    println!("🚀 Server running at http://localhost:8000");

    HttpServer::new(|| {
        App::new()
            .wrap(Cors::permissive()) 
            .service(contact_handler)
    })
    .bind(("127.0.0.1", 8000))?
    .run()
    .await
}
