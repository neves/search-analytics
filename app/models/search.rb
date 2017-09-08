require 'digest'

class Search < ApplicationRecord
  self.primary_key = :md5

  def self.createOrIncrement(query)
    md5 = Digest::MD5.hexdigest(query)
    Search.create(md5: md5, query: query)
  rescue ActiveRecord::RecordNotUnique
    Search.update_counters(md5, hits: 1)
    Search.find md5
  end
end
