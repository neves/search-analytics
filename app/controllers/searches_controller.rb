class SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    @searches = Search.ordered_by_highest_frequency
  end

  def create
    Search.createOrIncrement(params[:query])
  end

  def clear
    Search.delete_all
    redirect_to action: 'index'
  end
end
