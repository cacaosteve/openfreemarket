# Pin npm packages by running ./bin/importmap


# config/importmap.rb
pin "application", to: "application.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin_all_from "app/javascript/lib", under: "lib"
pin_all_from "app/javascript/custom", under: "custom"