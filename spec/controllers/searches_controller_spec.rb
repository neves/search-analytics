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

end
