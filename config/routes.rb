Rails.application.routes.draw do
  resources :searches
  get 'searches/index'

  resources :articles, only: :index

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
