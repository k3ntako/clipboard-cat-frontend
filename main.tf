module "s3_build_files" {
  source = "hashicorp/dir/template"

  base_dir = "build/"
}

terraform {
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = "~> 3.0"
    }
  }
}

provider "aws" {
  region = "us-east-1"
}

resource "aws_s3_bucket" "react_s3_bucket" {
  bucket = "copy-cat-frontend-prod.k3ntako.com"
  acl    = "private"

  website {
    index_document = "index.html"
  }
}

resource "aws_s3_bucket_object" "build_objects" {
  for_each     = module.s3_build_files.files
  acl          = "public-read"
  bucket       = aws_s3_bucket.react_s3_bucket.bucket
  key          = each.key
  source       = each.value.source_path
  etag         = each.value.digests.md5
  content_type = each.value.content_type
}