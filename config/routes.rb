Rails.application.routes.draw do
  
  resources :dive_logs
  resources :dive_site_animals
  resources :dive_sites, only: [:index, :show]
  resources :animals, only: [:index, :show]
  resources :divers

  get "/me", to: "divers#show"
  post "/signup", to: "divers#create"
  post "/login", to: "sessions#create"
  delete "/logout", to: "sessions#destroy"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
