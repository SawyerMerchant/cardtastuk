Rails.application.routes.draw do

  mount_devise_token_auth_for 'User', at: 'auth'
  devise_for :admin_users, ActiveAdmin::Devise.config
  ActiveAdmin.routes(self)

  scope '/api' do #, defaults: { format: :json } do
    scope '/v1' do
      resources :cards, only: [:index, :show]
      resources :categories, only: [:index, :show]
      resources :tags, only: [:index, :show]
      resources :lists, only: [:create, :show]
      resources :orders, only: [:create]
      resources :organizations, only: [:index]
    end
  end

  resources :proofs, only: [:show]

  # get '*', to: redirect("/")

  # get '/admin', to "active_admin/devise/sessions#new"

  get '*path', to: "application#fallback_index_html", constraints: ->(request) do
    !request.xhr? && request.format.html?
  end
end
