require 'rails_helper'

RSpec.describe SearchesController, type: :controller do

  describe "GET #index" do
    it "returns http success" do
      get :index
      expect(response).to have_http_status(:success)
    end

    it 'assigns @searches' do
      search = Search.createOrIncrement('search query string')
      get :index
      expect(assigns(:searches).to_a).to eq([search])
      expect(response).to render_template('index')
    end
  end

  describe 'POST #create' do
    it 'creates a new search' do
      expect {
        post :create, params: {query: 'new search term'}
      }.to change { Search.count }
    end
  end

  describe 'DELETE #clear' do
    it 'delete all searches' do
      search = Search.createOrIncrement('search query string')
      delete :clear
      expect(Search.count).to be(0)
      expect(response).to redirect_to(action: 'index')
    end
  end
end
