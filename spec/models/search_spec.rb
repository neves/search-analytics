require 'rails_helper'

RSpec.describe Search, type: :model do
  context 'createOrIncrement' do
    it 'create a Search if query does not already exists' do
      search = Search.createOrIncrement(rand.to_s)
      expect(search.persisted?).to be(true)
    end

    it 'increment a Search if query already exists' do
      query = 'How do I cancel my subscription'
      created = Search.createOrIncrement(query)
      updated = Search.createOrIncrement(query)
      expect(updated.hits).to be(created.hits + 1)
    end
  end
end
