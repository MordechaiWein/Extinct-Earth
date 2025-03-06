Rails.application.routes.draw do
  post '/signup', to: 'users#create'
  get '/me', to: 'users#show'
  get '/people', to: 'users#people'
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/cookie', to: 'users#cookie'

  post '/webhook', to: "webhook#broadcast"
  resources :animals, only: [:index, :create, :update, :destroy]
  resources :events, only: [:index, :create, :update, :destroy]
  resources :comments, only: [:create, :update, :destroy]
  resources :likes, only: [:create, :destroy]
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
