Rails.application.routes.draw do
  resources :goals
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  post 'auth/login', to: 'authentication#authenticate'
  post 'auth/signup', to: 'authentication#create_user'
end
