Rails.application.routes.draw do
  namespace :api do
  
  resources :dive_logs
  resources :dive_site_animals
  resources :dive_sites, only: [:index, :show]
  resources :animals, only: [:index, :show]
  resources :divers

  get "/me", to: "divers#show_current"
  post "/signup", to: "divers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
  get "/dive_sites/:id/animals", to: "dive_sites#showAnimals"
  # get "/divers/current", to: "divers#show_current"
  get "/divers/:id/dive_logs", to: "divers#showDiverLogs"
end
