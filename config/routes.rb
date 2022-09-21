Rails.application.routes.draw do
  
  resources :dive_logs
  resources :dive_site_animals
  resources :dive_sites
  resources :animals
  resources :divers
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
