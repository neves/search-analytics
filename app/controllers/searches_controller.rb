class SearchesController < ApplicationController
  def index
    @searches = Search.ordered_by_highest_frequency
  end

  def create
    Search.createOrIncrement(params[:query])
  end

end
