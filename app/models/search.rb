require 'digest'

class Search < ApplicationRecord
  self.primary_key = :md5

  scope :ordered_by_highest_frequency, -> { order(hits: :desc) }

  def self.createOrIncrement(query)
    md5 = Digest::MD5.hexdigest(query)
    Search.create(md5: md5, query: query)
  rescue ActiveRecord::RecordNotUnique
    Search.increment_counter(:hits, md5)
    Search.find md5
  end
end
